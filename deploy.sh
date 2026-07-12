#!/usr/bin/env bash
# 重新部署 index.html 到 Vercel vedesign-themes 项目
# 用法：
#   1. 把你的 Vercel token 放进环境变量 VERCEL_TOKEN（推荐写进 ~/.zshrc）
#   2. cd 到本目录，跑 ./deploy.sh
#
# 工作流：
#   - 执行本地校验
#   - 拷贝 index.html 到 dist/
#   - base64 编码 + 调 Vercel REST API
#   - 轮询直到 READY
#   - 输出最终 URL

set -euo pipefail

cd "$(dirname "$0")"

echo "🔎 运行部署前校验..."
python3 scripts/check-project.py

if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo "❌ 请先 export VERCEL_TOKEN=vcp_xxx（去 https://vercel.com/account/tokens 创建）" >&2
  exit 1
fi

mkdir -p dist/asset
cp index.html dist/index.html
cp -R asset/. dist/asset/
echo "📦 index.html 大小: $(du -h dist/index.html | cut -f1)"

echo "🚀 提交部署到 Vercel..."
python3 - <<PY > /tmp/.vercel_resp.json
import base64, json, os, urllib.request, ssl
ctx = ssl.create_default_context()
with open("dist/index.html", "rb") as f:
    index_b64 = base64.b64encode(f.read()).decode()
files = [{"file": "index.html", "data": index_b64, "encoding": "base64"}]
for root, _, names in os.walk("dist/asset"):
    for name in names:
        path = os.path.join(root, name)
        with open(path, "rb") as f:
            files.append({
                "file": path.removeprefix("dist/"),
                "data": base64.b64encode(f.read()).decode(),
                "encoding": "base64",
            })
body = {
    "name": "vedesign-themes",
    "files": files,
    "target": "production",
    "projectSettings": {"framework": None}
}
req = urllib.request.Request(
    "https://api.vercel.com/v13/deployments?forceNew=1",
    data=json.dumps(body).encode(),
    headers={"Authorization": f"Bearer ${VERCEL_TOKEN}",
             "Content-Type": "application/json"},
    method="POST")
with urllib.request.urlopen(req, context=ctx, timeout=120) as r:
    print(r.read().decode())
PY

# 也可用 curl 兜底（Python 报错时）：
if ! [ -s /tmp/.vercel_resp.json ]; then
  curl -sS -X POST "https://api.vercel.com/v13/deployments?forceNew=1" \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    -H "Content-Type: application/json" \
    --data-binary @<(python3 -c "
import base64, json, os
index_b64 = base64.b64encode(open('dist/index.html','rb').read()).decode()
files = [{'file':'index.html','data':index_b64,'encoding':'base64'}]
for root, _, names in os.walk('dist/asset'):
    for name in names:
        path = os.path.join(root, name)
        files.append({'file':path.removeprefix('dist/'),'data':base64.b64encode(open(path,'rb').read()).decode(),'encoding':'base64'})
print(json.dumps({'name':'vedesign-themes','files':files,'target':'production','projectSettings':{'framework':None}}))
") > /tmp/.vercel_resp.json
fi

DEPLOY_ID=$(python3 -c "import json; print(json.load(open('/tmp/.vercel_resp.json'))['id'])")
echo "🆔 Deployment ID: $DEPLOY_ID"

echo "⏳ 等待部署完成..."
for i in 1 2 3 4 5 6 7 8 9 10; do
  state=$(curl -sS "https://api.vercel.com/v13/deployments/$DEPLOY_ID" \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    | python3 -c "import sys, json; print(json.loads(sys.stdin.read()).get('readyState','?'))")
  echo "   [$i] $state"
  case "$state" in
    READY)    break ;;
    ERROR|CANCELED) echo "❌ 部署失败"; exit 1 ;;
  esac
  sleep 3
done

echo ""
echo "✅ 部署完成"
echo "   👉 https://vedesign-themes.vercel.app"
rm -f /tmp/.vercel_resp.json

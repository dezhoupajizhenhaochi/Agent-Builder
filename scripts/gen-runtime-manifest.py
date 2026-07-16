#!/usr/bin/env python3
"""生成 agent-runtime 目录的文件清单，供「下载完整应用」在浏览器端按清单打包。

浏览器无法列目录，因此把 runtime 需要随包带走的所有文件写入 runtime-manifest.json。
运行时机：sync:dist 时自动执行，确保清单不过时。
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RUNTIME_DIR = os.path.join(ROOT, "agent-runtime")
MANIFEST_NAME = "runtime-manifest.json"

# 不打进下载包的文件（清单自身；build 过程中间产物等）
EXCLUDE = {MANIFEST_NAME}


def main():
    files = []
    for dirpath, _, names in os.walk(RUNTIME_DIR):
        for name in names:
            rel = os.path.relpath(os.path.join(dirpath, name), RUNTIME_DIR).replace(os.sep, "/")
            if rel in EXCLUDE:
                continue
            files.append(rel)
    files.sort()
    out = os.path.join(RUNTIME_DIR, MANIFEST_NAME)
    with open(out, "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=0)
    print(f"runtime-manifest.json: {len(files)} files")


if __name__ == "__main__":
    main()

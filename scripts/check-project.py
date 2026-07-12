#!/usr/bin/env python3
from html.parser import HTMLParser
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
DIST_INDEX = ROOT / "dist" / "index.html"


class Parser(HTMLParser):
    pass


def fail(message):
    print(f"ERROR: {message}", file=sys.stderr)
    return 1


def extract_last_inline_script(html):
    start = html.rfind("<script>")
    end = html.rfind("</script>")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("could not find the main inline <script> block")
    return html[start + len("<script>") : end]


def main():
    if not INDEX.exists():
        return fail("index.html is missing")

    html = INDEX.read_text(encoding="utf-8")
    Parser().feed(html)
    print("OK: index.html parses as HTML")

    node = shutil.which("node")
    if node:
        inline_js = extract_last_inline_script(html)
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tmp:
            tmp.write(inline_js)
            tmp_path = tmp.name
        subprocess.run([node, "--check", tmp_path], check=True)
        Path(tmp_path).unlink(missing_ok=True)
        print("OK: inline JavaScript passes node --check")
    else:
        print("WARN: node not found; skipped JavaScript syntax check")

    if DIST_INDEX.exists() and DIST_INDEX.read_bytes() != INDEX.read_bytes():
        print("WARN: dist/index.html differs from index.html; deploy.sh will resync it")

    size_kb = INDEX.stat().st_size / 1024
    print(f"OK: index.html size {size_kb:.1f} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


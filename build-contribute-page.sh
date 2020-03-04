CONTRIBUTING_PATH=docs/contributing.md
cp ./.github/CONTRIBUTING.md $CONTRIBUTING_PATH
echo '---
id: contributing
title: Contributing
---' | cat - $CONTRIBUTING_PATH > temp && mv temp $CONTRIBUTING_PATH
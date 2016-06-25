#!/bin/sh

cd /home/bindel/work/cse-web/
git pull origin
jekyll build
cd _site
rc=$(mktemp)

{
    echo "open https://static-webdav.kproxy.cornell.edu/cse" 
    find "." -type d | xargs -I{} echo 'mkcol '{}
    find "." -type f \
    -exec echo 'cd /'$(dirname {}) \; \
    -exec echo 'lcd '$(dirname {}) \; \
    -exec echo 'mput '$(basename {}) \; \
    -exec echo 'lcd /home/bindel/work/cse-web/_site' \;
    echo "quit";
} > "$rc";

cadaver -r "$rc" "$@" 
rm -f "$rc"
echo "Finished upload"

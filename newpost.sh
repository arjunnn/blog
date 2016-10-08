cd _posts
cat > $1.md <<'end'
---
layout: post
title: 
end
echo -e "date: \"`date +%Y-%m-%d`\"\ntags: \n---\n" >> $1.md
vi $1.md

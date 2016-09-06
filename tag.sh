cd tags
mkdir $1
cd $1
touch index.html
echo -e "--- \nlayout: tagpage \ntag: $1\n ---" > index.html
cd '../../'

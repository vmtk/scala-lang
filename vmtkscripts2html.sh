#!/usr/bin/env bash

usage="Please specify vmtk bin directory as first argument."

if [ $# -eq 0 ]
  then
    echo $usage
    echo
    exit 1;
fi

if [ ! -d $1 ]
  then
    echo $usage
    echo
    exit 1;
fi

if [ -d VmtkScripts ]
  then
    rm -rf VmtkScripts
fi

mkdir VmtkScripts

scripts=`ls $1/vmtk?*`

#scripts=`basename $scripts`

echo --- >> VmtkScripts/vmtkscripts.md
echo layout: page-full-width >> VmtkScripts/vmtkscripts.md
echo --- >> VmtkScripts/vmtkscripts.md
echo >> VmtkScripts/vmtkscripts.md
echo \# vmtkScripts reference >> VmtkScripts/vmtkscripts.md
for script in $scripts; do 
  script=`basename $script`
  echo \| \[$script\]\(/VmtkScripts/${script}.html\) \| `pyperun --nolog $script --doc` \| >> VmtkScripts/vmtkscripts.md
done

for script in $scripts; do 
  script=`basename $script`
  if [ $script == "vmtkscripts" ]
  then
    continue
  fi
  echo --- >> VmtkScripts/${script}.md
  echo layout: page-full-width >> VmtkScripts/${script}.md
  echo --- >> VmtkScripts/${script}.md
  echo pyperun --nolog $script --html
  pyperun --nolog $script --html >> VmtkScripts/${script}.md 
done


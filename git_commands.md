## Add 
    git add [file]
    git add .  --> to add all

## Commit
    git commit -m "message"

## Activity
    git log
    git log --oneline

## Status
    git Status

## Restore
    git restore [file]
    git restore . --> Restores all
    git restore --staged [file] --> restores that newly added file 
    git restore --staged . --> restores all newly added files or simply
    git restore -S . --> -S is shortcut for --staged

## Global ignore file
    git config --global core.excludes [file]

## Clearing the cache
    git -rm -r --cached

## Delete a file
we can just directly delete it using options, then we need to add changes and then commit
    git rm [file] --> this will also add changes automatically, you just need to commit

## Renaming a file
we can just directly rename a file, in status it will show that one file is deleted and new file has been created
    git mv [old file name] [new file name] --> this will also add changes automatically, you just need to commit

## Change commit message
    git --amend

## move to a previous commit
    git reset [commit code u get from log] --> changes will still be there but commits will be removed
    git reset --hard [commit code u get from log] --> changes will also be removed

## rebase --> change the order of commits in history
    git rebase -i --root

## branches
    git branch

## switch branch
    git switch -c NAME

## merge
    git merge <branch_name> --> merge branch "branch_name" in to current branch

## delete branch
    git branch --delete NAME
    git branch -d NAME
    git branch -D NAME

## Stashing code --> temporaryly saving changes somewhere so u can use them later
    git stash --> save changes in stash and restore files to last commit
    git stash list --> will show the sets of changes in stash, which you can use anytime
    git stash apply [number] --> will apply the set of changes that are there at the numberth position
    git stash pop --> will apply the set that is ther at the top of the stash

## Clean
    git clean -n --> dry run
    git clean -d --> directories
    git clean -dn
    git clean -f -->force
    git clean -df

## Remote
    git remote add origin url
    git push --all

## Keeping up to date with github
    clone
    fetch
    pull
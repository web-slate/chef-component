# Chef Component
Create Component Skeleton in Lightning speed.

### Below are useful commands.

#### Create component from definition file.
```
chef-component --f definitions.txt
chef-component --definitionFile=definitions.txt
```

#### Create component in TypeScript format
```
chef-component --f definitions.txt -e tsx
chef-component --definitionFile=definitions.txt --extension=tsx
```

#### Create component in JSX format
```
chef-component --f definitions.txt -e jsx
chef-component --definitionFile=definitions.txt --extension=jsx
```

#### Create component from existing location.
```
chef-component --f definitions.txt -l someDir/subDir1/subDir2
chef-component --definitionFile=definitions.txt --location=someDir/subDir1/subDir2
```
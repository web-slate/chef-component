# @fe-chef/component
Create Component Skeleton in Lightning speed.

### Below are useful commands.

Refer sample definition file - 	[definitions.txt](https://raw.githubusercontent.com/web-slate/chef-component/main/definitions.txt)

#### Create component from definition file.
```
npx @fe-chef/component -f definitions.txt
npx @fe-chef/component --definitionFile=definitions.txt
```

#### Create component in TypeScript format
```
npx @fe-chef/component -f definitions.txt -e tsx
npx @fe-chef/component --definitionFile=definitions.txt --extension=tsx
```

#### Create component in JSX format
```
npx @fe-chef/component -f definitions.txt -e jsx
npx @fe-chef/component --definitionFile=definitions.txt --extension=jsx
```

#### Create component from existing location.
```
npx @fe-chef/component -f definitions.txt -l someDir/subDir1/subDir2
npx @fe-chef/component --definitionFile=definitions.txt --location=someDir/subDir1/subDir2
```

#### Create component in same path
```
npx @fe-chef/component -f definitions.txt -l .
npx @fe-chef/component --definitionFile=definitions.txt --location=.
```
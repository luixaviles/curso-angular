# Sync from upstream (luixaviles)

```
git pull -s recursive -X theirs upstream develop
:wq
```

# Install Dialogs

```
bower install angular-dialog-service --save
```

# Install momentjs for date management

```
bower install angular-momentjs --save
```

# Install busy indicator

```
bower install angular-busy-plus --save
```

# Run E2E tests
```
npm run update-webdriver
```

Review latest version of Chrome driver: [https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)

```
grunt test:e2e
```

Update `package.json`

```
"grunt-protractor-runner": "^4.0.0"
```

```
npm update
npm run update-webdriver
grunt test:e2e
```

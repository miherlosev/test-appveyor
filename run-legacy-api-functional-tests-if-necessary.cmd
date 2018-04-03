if not defined APPVEYOR_PULL_REQUEST_NUMBER (
    echo setup variable to run gulp task
    npm run test2
)


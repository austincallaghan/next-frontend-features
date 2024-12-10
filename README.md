# Next Frontend Features

This repo provides a playground to test new features.

## Install requirements

- Install Volta: `brew install volta`
- Install Node: `volta install node`
- Install Yarn: `volta install yarn`

## Setup Environment

- Edit local.env file by updating all the fields that have asterisks.

  > Everytime you make changes to your local.env file, if the variable is used in the client side of the application, you'll need to rebuild the application to update the values.

- If your project already has a heroku environment, you can run the following command to copy the Heroku configuration variables to your `.env` file, otherwise skip this step.

  ```bash
  yarn bootstrap:env
  ```

- Install dependences . . . and make sure there are no errors

  ```bash
  yarn
  ```

- And now to run the project

  ```bash
  yarn dev
  ```

- Navigate to [https://localhost:3000/](https://localhost:3000/) to view the app! It should open in your browser automatically. If port 3000 is already in use on your machine Vite will detect this and check if the next port (3001, 3002, etc.) is available and run the app there.

## Building

To build your app for production run:

```bash
yarn run build
```

You can view the production build by running:

```bash
yarn run preview
```

You can now visit your preview at: [https://localhost:3000/](https://localhost:3000/)

import Koa from 'koa';

const app = new Koa();

// Middleware
app.use(async (ctx, next) => {
  // Do something before handling the request
  await next(); // Pass the control to the next middleware
  // Do something after handling the request
});

// Routes
app.use(async (ctx) => {
  ctx.body = 'Hello, World!';
});

// Start the server
const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});

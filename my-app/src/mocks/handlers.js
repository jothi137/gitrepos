import { rest } from 'msw'
export const handlers = [
  // Handles a GET /user request
  rest.get('https://jsonplaceholder.typicode.com/posts/:id', (req, res, ctx) => {
    const { id } = req.params
    if (id === "3") {
        return res(
            // Send a valid HTTP status code
            ctx.status(403),
            // And a response body, if necessary
            ctx.json({
              errorMessage: `post ${id} not found`,
            }),
          )
    }
    return res(
        ctx.status(200),
        ctx.json({}),
      );
  }),
]
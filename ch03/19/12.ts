// HIDE
namespace express_0312 {
  export interface Request {}
  export interface Response {
    send(text: string): void;
  }
}
interface App_0312 {
  get(path: string, cb: (request: express_0312.Request, response: express_0312.Response) => void): void;
}
const app_0312: App_0312 = null!;
// END

// Don't do this:
app_0312.get('/health', (request: express_0312.Request, response: express_0312.Response) => {
  response.send('OK');
});

// Do this:
app_0312.get('/health', (request, response) => {
  response.send('OK');
});


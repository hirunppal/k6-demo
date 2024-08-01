import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const url = 'https://localhost:5001/v3/Deals/41001';
  const params = {
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-GB',
      'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwN0I2RTQ3QTU1MzkxOTdDQ0Y2NzlDNTVEODFFNDQ1RTE2NUQ2QkVSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InNIdHVSNlZUa1pmTTlubkZYWUhrUmVGbDFyNCJ9.eyJuYmYiOjE3MjI0ODE5NDMsImV4cCI6MTcyMjQ4NTU0MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi1nb2ZpdmUtdWF0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjpbIklNQy5BUEkiLCJWZW5pbzIuQVBJIiwiQ2xpZW50UG9ydGFsLkFQSSIsIkdPRklWRS5BUEkiXSwiY2xpZW50X2lkIjoidmVuaW9jcm0uY29tIiwiZW5jcnlwdGVkZCI6IjEiLCJzdWIiOiIyMzEwOGI5OS1lZTI0LTQzYzQtYjllNy01OGRjNmE0ZTE2YTIiLCJhdXRoX3RpbWUiOjE3MjIzMTkzNTAsImlkcCI6ImxvY2FsIiwiZW1haWwiOiJ1YXQubmV3dGVzdEBob3RtYWlsLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6InVhdC5uZXd0ZXN0QGhvdG1haWwuY29tIiwibmFtZSI6InVhdC5uZXd0ZXN0QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIkNsaWVudElkIjoidmVuaW9jcm0uY29tIiwicm9sZSI6IiIsInVzZXJuYW1lIjoidWF0Lm5ld3Rlc3RAaG90bWFpbC5jb20iLCJDb21wYW55SWQiOiI1MDAwMDM0NyIsInNpZCI6IkZCQzlFMENFRDczMTVGMDY2M0RCNzQwNkMwQjVCMDVBIiwiaWF0IjoxNzIyNDgxOTQzLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJWZW5pbzIuQVBJIiwiQ2xpZW50UG9ydGFsLkFQSSIsIkdPRklWRS5BUEkiLCJJTUMuQVBJIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.SFy7Cz3WIN0Mubnj24iyP6oBVCwXmOQq2c_8RoE7rOcnsEG8C_QYXVkh1XRxKO_JRhnmB3M7-7vC0yOjSsqSmOIxk9kIn76gfR771N_WBGImYyybb2J20_h32sDYWeazd5GFk1bCP5lxe6d6d929Ivb4B1bWIpMzEBfF26qAxLYTp1nbi_ZHbyjnVzx4keG3sRHo5t99KZ4tJi8GOb2ISOhX1oPCAncMu5biW2HaFGoU_8dkpR72dLRj41EeRC6OzwCnwiCR82-7_2bk1LKMthhTUkCZM3gy5RbP6MFbyPdBgci6RNG9hmkbwUJxOSYIUMewkGA4wbRFYaoUg0QRtw',
      'cache-control': 'no-cache',
      'origin': 'https://portal.uat.veniocrm.com',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'referer': 'https://portal.uat.veniocrm.com/',
      'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
      'x-appname': 'venio'
    },
  };

  http.get(url, params);
}

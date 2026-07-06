<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Đăng ký</title>
</head>
<body>

<h2>Đăng ký tài khoản</h2>

<form action="${pageContext.request.contextPath}/RegisterServlet" method="post"></form>

<form action="RegisterServlet" method="post">

    <label>Họ tên:</label><br>
    <input type="text" name="fullname" required><br><br>

    <label>Tên đăng nhập:</label><br>
    <input type="text" name="username" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Mật khẩu:</label><br>
    <input type="password" name="password" required><br><br>

    <input type="submit" value="Đăng ký">

</form>

</body>
</html>


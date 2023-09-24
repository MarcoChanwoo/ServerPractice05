import Jwt from 'jsonwebtoken';

const jwtMiddleware = (ctx, next) => {
    const token = ctx.cookies.get('access_token');
    if (!token) return next(); // 토큰 없음
    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        ctx.state.user = {
            _id: decoded._id,
            username: decoded.username,
        };
        console.log(decoded);
        return next();
    } catch (e) {
        // 토큰 검증 실패 시
        return next();
    }
};

export default jwtMiddleware;

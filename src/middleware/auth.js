import jwt from 'jsonwebtoken';

/**
 * JWT auth middleware. Reads the `Authorization: Bearer <token>` header,
 * verifies it against process.env.JWT_SECRET (HS256 only — explicitly
 * rejects `alg: none` and any other algorithm), and attaches the decoded
 * payload to req.user before calling next().
 *
 * Responds 401 with a generic message on any missing/invalid token so we
 * never leak whether the failure was a missing header, expiry, or a bad
 * signature.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256'],
    });
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }
}

/**
 * GET /api/health
 * Simple liveness check — does not depend on MongoDB being reachable.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function getHealth(req, res) {
  res.status(200).json({
    success: true,
    data: { status: 'ok' },
    message: 'Service is healthy',
  });
}

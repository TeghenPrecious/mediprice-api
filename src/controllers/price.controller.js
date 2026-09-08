/**
 * POST /api/prices
 * Submit a community-reported price (FR-7) — Phase 2. Moderation rules and
 * request shape are open questions (SRS Section 8); not implemented yet.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function submitPrice(req, res) {
  res.status(501).json({
    success: false,
    data: null,
    message: 'Not implemented yet',
  });
}

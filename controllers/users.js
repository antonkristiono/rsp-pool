
const asyncHandler= require('../middleware/async');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()



exports.createUSer = asyncHandler( async (req, res, next) => {
    const { email, password, photo, created_at, updated_at, deleted_at} = req.body;
    const result = await prisma.users.create({
        data: {
            email,
            password,
            photo,
            created_at: new Date(),
            updated_at,
            deleted_at
        },
    });
    res.status(200).json(result);
});

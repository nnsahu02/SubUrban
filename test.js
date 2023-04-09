const getAllUser = (req, res) => {
    try {
        pool.query('SELECT * FROM users',
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: false,
                        message: err.message
                    })
                }

                const userData = result.rows
                return res.status(200).json({
                    status: true,
                    message: `There are ${userData.length} users in the DB.`,
                    data: userData
                })
            })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}


const getUsersById = (req, res) => {
    try {
        const Id = parseInt(req.params.Id)

        pool.query('SELECT * FROM users WHERE Id=$1',
            [Id],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: false,
                        message: err.message
                    })
                }
                const userData = result.rows
                return res.status(200).json({
                    status: true,
                    message: `Details of users with Id ${Id}.`,
                    data: userData
                })
            })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}


const updateUser = async (req, res) => {
    try {

        const Id = parseInt(req.params.Id)
        const { name, email, phone, password } = req.body

        const saltedPassword = await bcrypt.hash(password, 10);

        pool.query('UPDATE users SET name=$1, email=$2, phone=$3, password=$4 WHERE Id=$5',
            [name, email, phone, saltedPassword, Id],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: false,
                        message: err.message
                    })
                }
                const userData = {
                    Id, name, email, phone, saltedPassword
                }
                return res.status(200).json({
                    status: true,
                    message: `Details of user updated with Id ${Id}.`,
                    data: userData
                })
            })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}


const deleteUser = (req, res) => {
    try {

        const Id = parseInt(req.params.Id)

        pool.query('DELETE FROM users  WHERE Id=$1',
            [Id],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: false,
                        message: err.message
                    })
                }

                return res.status(200).json({
                    status: true,
                    message: `Details of user deleted with Id ${Id}.`,
                })
            })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}











router.get('/users', getAllUser)

router.get('/users/:Id', getUsersById)

router.put('/users/:Id', updateUser)

router.delete('/users/:Id', deleteUser)


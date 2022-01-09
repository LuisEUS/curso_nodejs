const usuariosQueries = {
    insertUsuario: `
    INSERT INT
    usuarios(
        nombre,
        email,
        password,
        status
    )
    VALUES
    (?, ?, ?, ?)
    `,
    selectUsuarios: `
    SELECT
    *
    FROM
        usuarios
    WHERE
        status = 1
    LIMIT
        ?, ?
    `,

    getUsuarioByEmail: `
    SELECT
    *
    FROM
        usuarios
    WHERE
        email=?
    AND
        status=1
    `,

    updateUsuario: `
    UPDATE
        usuarios
    SET
        nombre=?,
        status=?
    WHERE
        email=?
    `,
    
    deleteUsuario: `
    UPDATE
        usuarios
    SET
        status=0
    WHERE
        email=?
    `,
};

module.exports =  usuariosQueries;
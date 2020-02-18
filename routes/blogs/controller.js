const { Blogs } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Blogs.find({});

            res.status(200).send({
                message: "Show all data blogs",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },

    getById: (req, res) => {
        const { id } = req.params;

        const filterById = Blogs.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        });

        res.status(200).send({
            message: `Blogs with id ${id}`,
            data: filterById[0]
        });
    },

    postData: async (req, res) => {
        try {
            const data = req.body;
            const file = req.file;

            const result = await Blogs.create({
                ...data,
                image: file === undefined ? null : file.path
            });

            res.status(200).send({
                message: "New blogs has succesfully added",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    }
};

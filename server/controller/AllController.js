const { Phonebook } = require("../model/model")
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class AllController {

    static async addPhone(req, res) {
        const createPhoneNumber = await Phonebook.create({
            ...req.body.data
        })
        res.send({ phone: createPhoneNumber })
    }

    static async allPhones(req, res) {
        const allPhoneNumber = await Phonebook.findAll({})
        res.send({ phone: allPhoneNumber })
    }

    static async getPhone(req, res) {
        let phone = await Phonebook.findOne({ where: { id: req.params.id } })
        res.send({ phone: phone })
    }

    static async delPhone(req, res) {
        let phone = await Phonebook.destroy({
            where: { id: req.params.id }
        })
        res.send({ phone: phone })
    }

    static async editPhone(req, res) {
        let phone = await Phonebook.update({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber
        },
            { where: { id: req.params.id } }
        )
        res.send({ phone: phone })
    }

    static async findPhone(req, res) {
        let phone = await Phonebook.findAll({
            where: {
                name: { [Op.like]: `%${req.body.text}%` }
            }
        });
        res.send({ phone: phone })
    }
}
module.exports = { AllController }
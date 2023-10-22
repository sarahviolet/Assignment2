import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => {
	const user = new Product(req.body)
	try {
		await user.save()
		return res.status(200).json({
			message: "Successfully added!"
		})
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		})
	}
}
const list = async (req, res) => {
	try {
		let users = await Product.find();
		res.json(users)
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		})
	}
}
const userByID = async (req, res, next, id) => {
	try {
		let user = await Product.findById(id)
		if (!user)
			return res.status('400').json({
				error: "Product not found"
			})
		req.profile = user
		next()
	} catch (err) {
		return res.status('400').json({
			error: "Could not retrieve user"
		})
	}
}
const read = (req, res) => {
	req.profile.hashed_password = undefined
	req.profile.salt = undefined
	return res.json(req.profile)
}

const update = async (req, res) => {
	try {
		let user = req.profile
		user = extend(user, req.body)
		user.updated = Date.now()
		await user.save()
		res.json(user)
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		})
	}
}
const remove = async (req, res) => {
	try {
		let user = req.profile
        console.log(user);
        let deletedProduct = await Product.deleteOne({_id: user._id});
		res.json(deletedProduct)
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		})
	}
}

const removeAll = async (req, res) => {
	try {
        let deletedProduct = await Product.deleteMany();
		res.json(deletedProduct)
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err)
		})
	}
}
export default { create, userByID, read, list, remove, update, removeAll }

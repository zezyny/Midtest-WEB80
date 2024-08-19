import { generatedToken } from "../temp.js"
import ProfileModel from "../models/profile.js"

const profileController = {
    updateProfile: async (req, res) => {
        try {
            const { id } = req.params
            const crrUser = req.crrUser
            if (id !== crrUser._id) throw {
                message: "Bạn không có quyền chỉnh sửa",
                status: 403
            }
            const existed = await ProfileModel.findOne({ userId: crrUser._id })
            const data = req.body
            if (!existed) {
                const createdProfile = await ProfileModel.create({
                    ...data,
                    userId: id
                })
                res.status(201).send({
                    data: createdProfile,
                    message: "Thêm thông tin cá nhân thành công"
                })
            } else {
                await ProfileModel.findOneAndUpdate({ userId: id }, {
                    ...data
                })
                res.status(201).send({
                    // data: data,
                    message: "Cập nhật thành công"
                })
            }

        } catch (error) {
            res.status(error.status ?? 401).send({
                message: error.message ?? 'Bạn không thể thực hiện hành động!',
                data: null
            });
        }
    },
    getProfile: async (req, res) => {
        try {
            const { id } = req.params;
            const dataUserProfile = await ProfileModel.findOne({ userId: id })
            console.log(dataUserProfile);
            res.status(200).send({
                data: dataUserProfile,
                message: 'Thành công'
            })
        } catch (error) {
            res.status(error.status ?? 401).send({
                message: error.message ?? 'Bạn không thể thực hiện hành động!',
                data: null
            });
        }
    },
    deleteProfile: async (req, res) => {
        try {

            const { id } = req.params
            const crrUser = req.crrUser
            if (id !== crrUser._id) throw {
                message: "Bạn không có quyền chỉnh sửa",
                status: 403
            }
            await ProfileModel.findOneAndDelete({ userId: id })
            res.status(201).send({
                message: 'Xóa thành công'
            })
        } catch (error) {
            res.status(error.status ?? 401).send({
                message: error.message ?? 'Bạn không thể thực hiện hành động!',
                data: null
            });
        }
    }
}

export default profileController
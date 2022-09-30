import Joi from 'joi';

export const medicineValidator = Joi.object({
  medicineName: Joi.string().label('Medicine Name').required(),
  quantity: Joi.number().label("Quantity").required(),
  category: Joi.string().label('Category').required(),
  expDate: Joi.date().label('Date').required(),
  description: Joi.string().label('Description').required(),
  imgUrl: Joi.string().label('Url').required(),
});

export const validateMedicine= (data) => {
  return medicineValidator.validate(data);
};
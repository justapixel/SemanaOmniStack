const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')
module.exports = {
  async index (request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    const {name, email, whatsapp, city, uf} = request.body;
    
    const id = generateUniqueId();

    try {
      await connection('ongs').insert({
        id,
        name,
        email, 
        whatsapp,
        city,
        uf
      })
      return response.json({ id });
    } catch (error) {
      return response.status(500).json({error: 'Error while registering new ONG' });
    }
  
  }
}
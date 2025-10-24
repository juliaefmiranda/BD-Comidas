import * as ComidaModel from '../models/comidaModel.js'

export const listarTodos = async (req, res) => {
    try {

        const comidas = await ComidaModel.encontreTodos();

        if (!comidas || comidas.length === 0) {
            res.status(404).json({
                total: 0,
                mensagem: 'Não há comidas na lista', comidas
            });
        }

        res.status(200).json({
            total: comidas.length,
            mensagem: 'Lista de comidas', comidas 
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        
        const id = req.params.id;
        const comida = await ComidaModel.encontreUm(id);

        if (!comida) {
            return res.status(404).json({
                erro: 'Comida não encontrado',
                mensagem: 'Verifique o id do comida',
                id: id
            })
        }

        res.status(200).json({
            message: 'Comida encontrado', comida
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar comida por id',
            detalhes: error.message,
            status: 500
        })
    }
}
const prisma = require("../CONFIGS/prisma");
class ScoresController {
  async index(req, res) {
    try {
      const scores = await prisma.score.findMany();
      return res.status(200).json(scores);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async store(req, res) {
    const body = req.body;

    try {
      const score = await prisma.score.create({
        data: {
          name: body.name,
          score: body.score,
        },
      });
      return res.status(201).json(score);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const score = await prisma.score.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!score) return res.status(404).json({ message: "score not found" });

      return res.status(200).json(score);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const score = await prisma.score.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!score) return res.status(404).json({ message: "score not found" });

      const updatedscore = await prisma.score.update({
        where: {
          id: Number(id),
        },
        data: body,
      });

      return res.status(200).json(updatedscore);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const score = await prisma.score.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!score) return res.status(404).json({ message: "score not found" });

      await prisma.score.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(204).json();
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new ScoresController();

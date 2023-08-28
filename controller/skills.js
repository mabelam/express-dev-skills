const skill = require('../models/skill');

module.exports ={
    index, 
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', {
      skills,
      title: 'All Skills'
    });
  }

  function create(req, res) {
    const { skill, description, experience } = req.body;
    Skill.addSkill(skill, description, experience);
    res.redirect('/skills');
  }

  function newSkill(req, res) {
    res.render('skills/newSkills', {
      title: 'Input Skills'
    });
  }

  function deleteSkill(req, res) {
    const skillId = req.params.id;
    Skill.deleteSkill(skillId);
    res.redirect('/skills');
  }

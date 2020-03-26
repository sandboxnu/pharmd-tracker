import { Router } from 'express';

const router = Router();

// Gets all the assessments in DB
router.get('/', async (req, res) => {
    try {
        const assessments = await req.context.models.Assessment.findAll();
        return res.send(assessments);
    } catch(e) {
        console.log(e);
        return res.send(e);
    }
});

// Gets an assessment with the given id
router.get('/:assessmentID', async (req, res) => {
    try {
        const assessment = await req.context.models.Assessment.findById(req.params.assessmentID);
        return res.send(assessment);
    } catch(e) {
        console.log(e);
        return res.send(e);
    }
});

// Adds a new assessment to the DB
router.post('/', async (req, res) => {
    try {
        const newAssessment = await req.context.models.Assessment.addNewAssessment(req.body);
        return res.send(newAssessment);
    } catch (e) {
        console.log(e);
        return res.send(e);
    }
});

// Updates the assessment with given ID in the DB
router.put('/:assessmentID', async (req, res) => {
    try {
        const updateAssessment = await req.context.models.Assessment.updateAssessment(req.params.assessmentID, req.body);
        return res.send(updateAssessment);
    } catch (e) {
        console.log(e);
        return res.send(e);
    }
});

export default router;

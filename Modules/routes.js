import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findModulesForCourse = async (req, res) => {
    const { cid } = req.params;
        const modules = await dao.findModulesForCourse(cid);
        res.json(modules);
    };
    app.get("/api/courses/:cid/modules", findModulesForCourse);

    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    };
    app.post("/api/courses/:cid/modules", createModule);

    const deleteModule = async (req, res) => {
        const { cid, moduleID } = req.params;
        const status = await dao.deleteModule(moduleID);
        res.json(status);
    };
    app.delete("/api/modules/:moduleID", deleteModule);

    const updateModule = async (req, res) => {
        const { cid, moduleID } = req.params;
        const status = await dao.updateModule(moduleID, req.body);
        res.json(status);
      };
    app.put("/api/modules/:moduleID", updateModule);


}
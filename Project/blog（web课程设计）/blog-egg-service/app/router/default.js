module.exports = app => {
  const { router, controller } = app;
  router.get("/default/getArticleList", controller.default.home.getArticleList);
  router.get(
    "/default/getArticleById/:id",
    controller.default.home.getArticleById
  );
  router.get(
    "/default/getArticleTypes",
    controller.default.home.getArticleTypes
  );
  router.get("/default/getListById/:id", controller.default.home.getListById);
};

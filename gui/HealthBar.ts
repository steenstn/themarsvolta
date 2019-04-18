class HealthBar implements GUIRenderable {

    private renderStrategy : BarRenderStrategy;

    constructor(renderStrategy : BarRenderStrategy) {
        this.renderStrategy = renderStrategy;
    }

    render = (context) => {
        this.renderStrategy.render(context);
    }
}
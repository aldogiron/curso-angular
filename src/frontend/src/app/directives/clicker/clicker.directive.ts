import { Directive, HostListener, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appClicker]'
})
export class ClieckerDirective {

    hasView: boolean;

    @Input()
    public set mostrar(condition: boolean) {
        if (condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef){
        }

    @HostListener('click')
    onHostClick() {
        //console.log('text: ', this.directiveText);
    }

}

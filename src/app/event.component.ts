import { OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

export class EventComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    componentName: string;

    ngOnInit(): void {
        console.log(`${this.componentName} On Init`);
    }

    ngOnChanges(): void {
        console.log(`${this.componentName} On Changes`);
    }

    ngDoCheck(): void {
        console.log(`${this.componentName} Do Check`);
    }

    ngAfterContentInit(): void {
        console.log(`${this.componentName} After Content Init`);
    }

    ngAfterContentChecked(): void {
        console.log(`${this.componentName} After Content Checked`);
    }

    ngAfterViewInit(): void {
        console.log(`${this.componentName} After View Init`);
    }

    ngAfterViewChecked(): void {
        console.log(`${this.componentName} After View Checked`);
    }

    ngOnDestroy(): void {
        console.log(`${this.componentName} On Destroy`);
    }
}

import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();
  
  

  constructor(private dialog:MatDialog,
              private snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit() {
  }

  openAddContactDialog():void  {
      let dialogref =   this.dialog.open(NewContactDialogComponent,{
          width:'450px'
        });

        dialogref.afterClosed().subscribe(result => {
          console.log('the dialog was closed',result);

          if (result) {
           this.openSnackBar("contact Added","Navigate")
            .onAction().subscribe(()=> {
              //navigate
              this.router.navigate(['/contactmanager',result.id]);
            })
          }
        })

        
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }


}

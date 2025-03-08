import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { User } from './core/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span class="logo" routerLink="/">Product Bidding Mart</span>
      
      <span class="spacer"></span>
      
      <ng-container *ngIf="(currentUser$ | async) as user; else authButtons">
        <button mat-button [matMenuTriggerFor]="userMenu">
          <mat-icon>account_circle</mat-icon>
          {{ user.firstName }}
        </button>
        <mat-menu #userMenu="matMenu">
          <button mat-menu-item routerLink="/dashboard">
            <mat-icon>dashboard</mat-icon>
            <span>Dashboard</span>
          </button>
          <button mat-menu-item routerLink="/profile">
            <mat-icon>person</mat-icon>
            <span>Profile Settings</span>
          </button>
          <button mat-menu-item routerLink="/wallet">
            <mat-icon>account_balance_wallet</mat-icon>
            <span>My Wallet</span>
          </button>
          <button mat-menu-item routerLink="/orders">
            <mat-icon>shopping_bag</mat-icon>
            <span>My Orders</span>
          </button>
          <button mat-menu-item routerLink="/listings">
            <mat-icon>store</mat-icon>
            <span>My Listings</span>
          </button>
          <button mat-menu-item routerLink="/bids">
            <mat-icon>gavel</mat-icon>
            <span>My Bids</span>
          </button>
          <button mat-menu-item routerLink="/favorites">
            <mat-icon>favorite</mat-icon>
            <span>Favorites</span>
          </button>
          <mat-divider></mat-divider>
          <button mat-menu-item (click)="logout()">
            <mat-icon>exit_to_app</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </ng-container>
      
      <ng-template #authButtons>
        <button mat-button routerLink="/auth/login">Login</button>
        <button mat-raised-button color="accent" routerLink="/auth/register">Register</button>
      </ng-template>
    </mat-toolbar>
    
    <router-outlet></router-outlet>
  `,
  styles: [`
    .toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: linear-gradient(135deg, #1976d2 0%, #64b5f6 100%);
    }
    
    .logo {
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 500;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    :host {
      display: block;
      padding-top: 64px;
      min-height: 100vh;
    }

    mat-divider {
      margin: 8px 0;
    }
  `]
})
export class AppComponent {
  currentUser$: Observable<User | null>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser$ = this.authService.currentUser$;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
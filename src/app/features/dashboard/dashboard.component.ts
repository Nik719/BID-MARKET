import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container">
      <h1>Dashboard</h1>
      <div class="dashboard-grid">
        <mat-card>
          <mat-card-header>
            <mat-icon mat-card-avatar>shopping_cart</mat-icon>
            <mat-card-title>My Bids</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Active Bids: 3</p>
            <p>Won Auctions: 5</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View All</button>
          </mat-card-actions>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-icon mat-card-avatar>store</mat-icon>
            <mat-card-title>My Listings</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Active Listings: 2</p>
            <p>Sold Items: 8</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View All</button>
          </mat-card-actions>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-icon mat-card-avatar>account_balance_wallet</mat-icon>
            <mat-card-title>Transactions</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Total Spent: $1,200</p>
            <p>Total Earned: $3,500</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="primary">View All</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    mat-card {
      height: 100%;
    }
    mat-card-content {
      margin-top: 1rem;
    }
  `]
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}
}
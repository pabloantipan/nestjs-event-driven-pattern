import { UserRegisteredEvent } from '@domain/interfaces/event.interface';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
// import { UserRegisteredEvent } from 'domain/events/user-registered.event';

@Injectable()
export class SendWelcomeEmailJob {

  @OnEvent('user.registered')
  async handleUserRegistered(event: UserRegisteredEvent) {
    // Get user email from the event
    const email = event.payload.email;

    // Send welcome email using a chosen service (e.g., SendGrid, Mailchimp)
    await this.sendWelcomeEmail(email);
  }

  private async sendWelcomeEmail(email: string) {
    // ... Implement logic to send the welcome email using your chosen service ...
    console.log(`Sending welcome email to ${email}`);
  }
}
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
  StreamAutocompleteTextareaModule,
  StreamChatModule
} from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, StreamAutocompleteTextareaModule, StreamChatModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{ 
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'patient-mud-1';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicGF0aWVudC1tdWQtMSIsImV4cCI6MTcxNTcxMzE2MX0._FycUexz9AaVgwgnRqWayJvRvRr8CV1BtPRqoxNpqI8';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation;
  }

  async ngOnInit() {
      const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        name: 'Talking about Angular'
      });
      await channel.create();
      this.channelService.init({
        type: 'messaging',
        id: { $eq: 'talking-about-angular' },
      })
  }
}

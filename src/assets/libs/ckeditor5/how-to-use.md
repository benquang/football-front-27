1. Using online builder and generate custom build, then Download it: https://ckeditor.com/ckeditor-5/online-builder

2. Extract it to assets/libs/ckeditor5

3. npm install --save @ckeditor/ckeditor5-angular@4

4. declair typing of CkeditorBuild module: ckeditor.typings.d.ts

```
declare module 'src/assets/libs/ckeditor5/build/ckeditor' {
  const ClassicEditorBuild: any;
  export = ClassicEditorBuild;
}
```

https://github.com/ckeditor/ckeditor5-angular/issues/70#issuecomment-513827165

5. import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

6. Open tsconfig.json, add to "compilerOptions" this option:
   "allowJs": true,
   "allowSyntheticDefaultImports": true,

7. In Component where using CkE5,
   import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';
   ...
   editor = Editor;

// You can copy your ordered list from src\assets\libs\ckeditor5\sample\index.html
// And can save to SystemConstant

```
  public static CkEditorCfg = {
    toolbar: {
      items: [
        'heading', '|', 'removeFormat', 'alignment', 'bold', 'italic', 'underline',
        'strikethrough', 'link', 'imageInsert', 'mediaEmbed', 'highlight', '|',
        'outdent', 'indent', '|', 'fontSize', 'fontBackgroundColor',
        'fontColor', 'fontFamily', 'bulletedList', 'numberedList', 'insertTable',
        'subscript', 'superscript', 'blockQuote', 'undo', 'redo', 'findAndReplace',
        'codeBlock', 'code', '|', 'sourceEditing'
      ]
    },
    language: 'en',
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', 'linkImage', 'resizeImage'],
      resizeOptions: [
        { name: 'resizeImage:original', value: null },
        { name: 'resizeImage:50', value: '75' },
        { name: 'resizeImage:50', value: '50' },
        { name: 'resizeImage:50', value: '25' },
      ],
      resizeUnit: '%',
    },
    table:
    {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties']
    },
    simpleUpload: {
      // uploadUrl: UrlConstant.API.CKE_IMG,
      withCredentials: true,
      headers: {
        // eslint-disable-next-line max-len
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdXlsbEBoY211dGUuZWR1LnZuIiwiZXhwIjoxNjUyODU4NzQ5LCJpYXQiOjE2NTI4NDA3NDl9.RlquOijRng-nR5jeHDYCjtQ0LIF3hUjdREVB5ri6LHZquJLfrTRnqs5yQybAfz-Hv6FhqCBmhyDAwsEBH6nGYA`
        Authorization: `Bearer ${JSON.parse(localStorage.getItem(SystemConstant.CURRENT_INFO) ?? '{}')?.token}`
      }
    },
    mediaEmbed: {
      previewsInData: true,
      // Block mediaEmbed from domain;
      // Docs: https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_mediaembed-MediaEmbedConfig.html
      // removeProviders: [],
    },
    extraPlugins: ['Notification'],
    removePlugins: ['MediaEmbedToolbar'],
  };
```

7. In HTML:
   <ckeditor [config]="cfgEditor" [editor]="editor" formControlName="controlName"></ckeditor>

8. Warning: Using custom builder DO NOT include watchDog module!

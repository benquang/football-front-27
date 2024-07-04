import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {
  constructor(private http: HttpClient) { }

  readCsvData(csvFilePath: string): Promise<any> {

    return this.http.get(csvFilePath, { responseType: 'text' })
      .toPromise()
      .then(data => {
        const csvData = this.parseCsvData(data || '');
        return csvData;
      });
  }

  private parseCsvData(csvText: string): any[] {
    const lines = csvText.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const obj: any = {};
      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }

      result.push(obj);
    }

    return result;
  }
}
# Manual de Práticas de Contagem de Pontos de Função — Versão 4.3.1

**International Function Point Users Group (IFPUG)**

Chairperson, Counting Practices Committee<br>
Adri Timp<br>
Equens SE, Netherlands<br>
cpc@ifpug.org

## Nota Importante Referente à Tradução Brasileira do CPM

A tradução brasileira do IFPUG Counting Practices Manual deve ser vista como um documento de apoio à utilização do manual original em inglês e não como uma fonte independente. Os tradutores, revisores e demais envolvidos no processo de tradução, especialmente o IFPUG, não assumem qualquer responsabilidade pela exatidão da presente tradução, especialmente quanto à sua utilização em relações comerciais e contratuais de qualquer tipo, inclusive como fonte de informações para o exame de certificação CFPS do IFPUG. Em resumo: ao utilizá-la, o usuário desta tradução o faz por sua própria conta e risco, não existindo qualquer garantia, implícita ou explícita, quanto à adequabilidade desta tradução para qualquer finalidade específica. Quando a exatidão das informações for importante, deve ser utilizado o manual original em inglês – IFPUG Counting Practices Manual V. 4.3. Esta tradução foi concluída em 27/05/2010 e foi atualizada em 08/08/2011.

---

© 2010 IFPUG. Todos os direitos reservados. International Function Point Users Group, 2009. Os filiados ao IFPUG podem reproduzir partes deste documento em seus manuais internos de práticas de contagem. Se forem utilizadas partes deste documento, o texto a seguir deverá aparecer na página-título do documento derivado: "Este documento contém material extraído do Manual de Práticas de Contagem do IFPUG. Tal material é reproduzido neste documento com a permissão do IFPUG."

ISBN 978-0-9753783-5-9

## Versão 4.3.1, Janeiro de 2010

Esta versão substitui a Versão 4.2.1, agora obsoleta.
As informações aqui contidas são modificadas periodicamente.

### Comitê de Práticas de Contagem

- Bonnie S. Brown, HP
- Royce Edwards, Software Composition Technologies
- E. Jay Fischer, JRF Consulting, Inc.
- David Garmus, The David Consulting Group
- Janet Russac, Software Measurement Expertise, Inc.
- Adri Timp, Equens SE, Netherlands
- Peter Thomas, Steria

### Equipe de Tradução da Versão em Português

**Coordenador:** Márcio Silveira, HP

**Tradutores e Revisores:**

- Mauricio Aguiar, TI Métricas
- Diana Baklizky, TI Métricas
- Teresa C. S. Zenga Beraldo, Bradesco
- Sandra Bica, HP
- Sergio Brígido, HP
- André Margoni, TI Métricas
- Guilherme Simões, Fatto
- Carlos Vazquez, Fatto

### Contato

Para informações sobre cópias adicionais deste manual, entrar em contato com:

IFPUG<br>
191 Clarksville Road<br>
Princeton Junction, NJ 08550<br>
U.S.A.<br>
(609) 799-4900<br>
E-mail: ifpug@ifpug.org<br>
Web: http://www.ifpug.org

## Membros do CPC Atuais e Anteriores

O método FSM do IFPUG apresentado neste manual tem sua origem no CPM 4.0, publicado em 1990. Muitas pessoas serviram como membros do CPC ao longo dos anos, aprimorando mutuamente sua visão e percepção em numerosas discussões complexas sobre a metodologia. Graças à contribuição dos membros atuais e anteriores, o método evoluiu até o padrão ISO FSM atual. O CPM é um acúmulo das contribuições de todos que serviram no CPC. O CPC também foi agraciado com o apoio e contribuição de nossos Diretores de Padrões de Contagem, aí incluídos Carol Dekkers, Bruce Rogora e Mary Bradley, assim como o esforço de Carol Dekkers na condução de ambos documentos pelo processo de aprovação da ISO. O IFPUG estende seu agradecimento a todos os membros atuais e anteriores do CPC, Diretores de Padrões de Contagem e Representantes na ISO.

- Allan Albrecht, Fundador da APF
- Kim Albee (CPM 4.0)
- Maarten Barth (CPM 4.0)
- Andy Belden (CPM 4.0)
- Angela Benton (CPM 4.1)
- Mary Bradley (CPM 4.0, CPM 4.1, Past Chair)
- Bonnie Brown (CPM 4.2, CPM 4.3, Vice Chair)
- Kevin Chinoy (CPM 4.1)
- Jean-Marc Desharnais (CPM 4.0)
- Rob Donnellan (CPM 4.0)
- Ian Drummond (CPM 4.0)
- Martin D'Souza (CPM 4.2, CPM 4.3)
- Boyd Edmiston (CPM 4.0)
- Royce Edwards (CPM 4.3)
- Peter Fagg (CPM 4.1)
- Jay Fischer (CPM 4.2, CPM 4.3)
- Sean Furey (CPM 4.1)
- Steve Galea (CPM 4.1)
- Barbara Gardner (CPM 4.0)
- David Garmus (CPM 4.0, CPM 4.1, CPM 4.2, CPM 4.3)
- Jim Glorie (CPM 4.1, CPM 4.2)
- Paul Goodman (CPM 4.0)
- Phil Hain (CPM 4.0)
- David Herron (CPM 4.0)
- Steve Hone (CPM 4.2)
- Bob Huckaby (Past Chair)
- Valerie Marthaler (CPM 4.1, CPM 4.2, CPM 4.3, Past Chair)
- Frank Mazzucco (CPM 4.0)
- Pam Morris (CPM 4.0, CPM 4.1, CPM 4.2)
- Jolijn Onvlee (CPM 4.0, CPM 4.1)
- Bruce Paynter (CPM 4.2)
- Dave Phillips (CPM 4.1)
- Ben Porter (CPM 4.0, Past Chair)
- Robin Ragland (CPM 4.0, CPM 4.1, Past Chair)
- Roger Roy (CPM 4.0)
- Eberhard Rudolph (CPM 4.0)
- Grant Rule (CPM 4.1)
- Bill Rumpf (CPM 4.0)
- Janet Russac (CPM 4.3)
- Michael Schooneveldt (CPM 4.0, CPM 4.1)
- Linda Smith (CPM 4.0, Past Chair)
- Jack Sprouls (CPM 4.0)
- Denis St. Pierre (CPM 4.0, CPM 4.1)
- Peter Thomas (CPM 4.3)
- Koni Thompson (CPM 4.1, CPM 4.2)
- Adri Timp (CPM 4.1, CPM 4.2, CPM 4.3, Chair)
- Tony Tiongson (CPM 4.0)
- Stephen Treble (CPM 4.1)
- Eddy van Vliet (CPM 4.1, CPM 4.2, CPM 4.3)
- Terry Vogt (CPM 4.2)
- Gary Walker (CPM 4.0, CPM 4.1)
- Ewa Wasylkowski (CPM 4.0, CPM 4.1)

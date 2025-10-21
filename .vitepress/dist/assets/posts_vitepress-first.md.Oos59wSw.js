import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.B-XtCDNB.js";const u=JSON.parse('{"title":"Algorithms","description":"How to use FRIDA to bruteforce Secure Startup with FDE-encryption on a Samsung G935F running Android","frontmatter":{"title":"Algorithms","description":"How to use FRIDA to bruteforce Secure Startup with FDE-encryption on a Samsung G935F running Android","date":"2025-04-28 00:01","tags":["sample"]},"headers":[],"relativePath":"posts/vitepress-first.md","filePath":"posts/vitepress-first.md"}'),t={name:"posts/vitepress-first.md"};function l(i,a,r,c,o,d){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="linked-list" tabindex="-1">Linked List <a class="header-anchor" href="#linked-list" aria-label="Permalink to &quot;Linked List&quot;">​</a></h1><p><em>Read this in other languages:</em><a href="./README.zh-CN.html"><em>简体中文</em></a>, <a href="./README.ru-RU.html"><em>Русский</em></a>, <a href="./README.ja-JP.html"><em>日本語</em></a>, <a href="./README.pt-BR.html"><em>Português</em></a>, <a href="./README.ko-KR.html"><em>한국어</em></a>, <a href="./README.es-ES.html"><em>Español</em></a>, <a href="./README.tr-TR.html"><em>Türkçe</em></a>, <a href="./README.uk-UA.html"><em>Українська</em></a></p><p>In computer science, a <strong>linked list</strong> is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.</p><p><em>Made with <a href="https://okso.app" target="_blank" rel="noreferrer">okso.app</a></em></p><h2 id="pseudocode-for-basic-operations" tabindex="-1">Pseudocode for Basic Operations <a class="header-anchor" href="#pseudocode-for-basic-operations" aria-label="Permalink to &quot;Pseudocode for Basic Operations&quot;">​</a></h2><h3 id="insert" tabindex="-1">Insert <a class="header-anchor" href="#insert" aria-label="Permalink to &quot;Insert&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Add(value)</span></span>
<span class="line"><span>  Pre: value is the value to add to the list</span></span>
<span class="line"><span>  Post: value has been placed at the tail of the list</span></span>
<span class="line"><span>  n ← node(value)</span></span>
<span class="line"><span>  if head = ø</span></span>
<span class="line"><span>    head ← n</span></span>
<span class="line"><span>    tail ← n</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>    tail.next ← n</span></span>
<span class="line"><span>    tail ← n</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span>end Add</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Prepend(value)</span></span>
<span class="line"><span> Pre: value is the value to add to the list</span></span>
<span class="line"><span> Post: value has been placed at the head of the list</span></span>
<span class="line"><span> n ← node(value)</span></span>
<span class="line"><span> n.next ← head</span></span>
<span class="line"><span> head ← n</span></span>
<span class="line"><span> if tail = ø</span></span>
<span class="line"><span>   tail ← n</span></span>
<span class="line"><span> end</span></span>
<span class="line"><span>end Prepend</span></span></code></pre></div><h3 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;Search&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Contains(head, value)</span></span>
<span class="line"><span>  Pre: head is the head node in the list</span></span>
<span class="line"><span>       value is the value to search for</span></span>
<span class="line"><span>  Post: the item is either in the linked list, true; otherwise false</span></span>
<span class="line"><span>  n ← head</span></span>
<span class="line"><span>  while n != ø and n.value != value</span></span>
<span class="line"><span>    n ← n.next</span></span>
<span class="line"><span>  end while</span></span>
<span class="line"><span>  if n = ø</span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span>  return true</span></span>
<span class="line"><span>end Contains</span></span></code></pre></div><h3 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;Delete&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Remove(head, value)</span></span>
<span class="line"><span>  Pre: head is the head node in the list</span></span>
<span class="line"><span>       value is the value to remove from the list</span></span>
<span class="line"><span>  Post: value is removed from the list, true, otherwise false</span></span>
<span class="line"><span>  if head = ø</span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span>  n ← head</span></span>
<span class="line"><span>  if n.value = value</span></span>
<span class="line"><span>    if head = tail</span></span>
<span class="line"><span>      head ← ø</span></span>
<span class="line"><span>      tail ← ø</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      head ← head.next</span></span>
<span class="line"><span>    end if</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span>  while n.next != ø and n.next.value != value</span></span>
<span class="line"><span>    n ← n.next</span></span>
<span class="line"><span>  end while</span></span>
<span class="line"><span>  if n.next != ø</span></span>
<span class="line"><span>    if n.next = tail</span></span>
<span class="line"><span>      tail ← n</span></span>
<span class="line"><span>      tail.next = null</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      n.next ← n.next.next</span></span>
<span class="line"><span>    end if</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span>  return false</span></span>
<span class="line"><span>end Remove</span></span></code></pre></div><h3 id="traverse" tabindex="-1">Traverse <a class="header-anchor" href="#traverse" aria-label="Permalink to &quot;Traverse&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Traverse(head)</span></span>
<span class="line"><span>  Pre: head is the head node in the list</span></span>
<span class="line"><span>  Post: the items in the list have been traversed</span></span>
<span class="line"><span>  n ← head</span></span>
<span class="line"><span>  while n != ø</span></span>
<span class="line"><span>    yield n.value</span></span>
<span class="line"><span>    n ← n.next</span></span>
<span class="line"><span>  end while</span></span>
<span class="line"><span>end Traverse</span></span></code></pre></div><h3 id="traverse-in-reverse" tabindex="-1">Traverse in Reverse <a class="header-anchor" href="#traverse-in-reverse" aria-label="Permalink to &quot;Traverse in Reverse&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ReverseTraversal(head, tail)</span></span>
<span class="line"><span>  Pre: head and tail belong to the same list</span></span>
<span class="line"><span>  Post: the items in the list have been traversed in reverse order</span></span>
<span class="line"><span>  if tail != ø</span></span>
<span class="line"><span>    curr ← tail</span></span>
<span class="line"><span>    while curr != head</span></span>
<span class="line"><span>      prev ← head</span></span>
<span class="line"><span>      while prev.next != curr</span></span>
<span class="line"><span>        prev ← prev.next</span></span>
<span class="line"><span>      end while</span></span>
<span class="line"><span>      yield curr.value</span></span>
<span class="line"><span>      curr ← prev</span></span>
<span class="line"><span>    end while</span></span>
<span class="line"><span>   yield curr.value</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span>end ReverseTraversal</span></span></code></pre></div><h2 id="complexities" tabindex="-1">Complexities <a class="header-anchor" href="#complexities" aria-label="Permalink to &quot;Complexities&quot;">​</a></h2><h3 id="time-complexity" tabindex="-1">Time Complexity <a class="header-anchor" href="#time-complexity" aria-label="Permalink to &quot;Time Complexity&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">Access</th><th style="text-align:center;">Search</th><th style="text-align:center;">Insertion</th><th style="text-align:center;">Deletion</th></tr></thead><tbody><tr><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(1)</td><td style="text-align:center;">O(n)</td></tr></tbody></table><h3 id="space-complexity" tabindex="-1">Space Complexity <a class="header-anchor" href="#space-complexity" aria-label="Permalink to &quot;Space Complexity&quot;">​</a></h3><p>O(n)</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://en.wikipedia.org/wiki/Linked_list" target="_blank" rel="noreferrer">Wikipedia</a></li><li><a href="https://www.youtube.com/watch?v=njTh_OwMljA&amp;index=2&amp;t=1s&amp;list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8" target="_blank" rel="noreferrer">YouTube</a></li></ul>`,23)])])}const m=s(t,[["render",l]]);export{u as __pageData,m as default};

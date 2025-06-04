import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface Complaint {
  id: number
  title: string
  description: string
  image: string
  status: "pendente" | "resolvido" | "analise" | "nao-resolvido"
  statusLabel: string
  creationDate: string
  resolutionDate?: string
  location: string
}

@Component({
  selector: "app-complaints",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./complaints.component.html",
  styleUrls: ["./complaints.component.css"],
})
export class ComplaintsComponent implements OnInit {
  searchTerm = ""
  isModalOpen = false
  selectedComplaint: Complaint | null = null
  isFilterOpen = false
  selectedFilter = "todos"

  // mudar as páginas
  currentPage = 1
  itemsPerPage = 6
  totalPages = 0

  complaints: Complaint[] = [
    {
      id: 1,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "pendente",
      statusLabel: "Pendente",
      creationDate: "21/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 2,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "resolvido",
      statusLabel: "Resolvido",
      creationDate: "20/05/2025",
      resolutionDate: "22/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 3,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "analise",
      statusLabel: "Em Análise",
      creationDate: "19/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 4,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "nao-resolvido",
      statusLabel: "Não Resolvido",
      creationDate: "18/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 5,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "pendente",
      statusLabel: "Pendente",
      creationDate: "17/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 6,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "resolvido",
      statusLabel: "Resolvido",
      creationDate: "16/05/2025",
      resolutionDate: "18/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 7,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "pendente",
      statusLabel: "Pendente",
      creationDate: "15/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 8,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "analise",
      statusLabel: "Em Análise",
      creationDate: "14/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 9,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "resolvido",
      statusLabel: "Resolvido",
      creationDate: "13/05/2025",
      resolutionDate: "15/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 10,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "nao-resolvido",
      statusLabel: "Não Resolvido",
      creationDate: "12/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 11,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "pendente",
      statusLabel: "Pendente",
      creationDate: "11/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
    {
      id: 12,
      title: "Vazamento de Esgoto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ac enim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas sit ex.",
      image: "../assets/img_complaints/Vazamento_Esgoto.jpg",
      status: "resolvido",
      statusLabel: "Resolvido",
      creationDate: "10/05/2025",
      resolutionDate: "12/05/2025",
      location: "Rua tal tal tal, Bairro tal tal, cidade tal",
    },
  ]

  ngOnInit(): void {
    this.updatePagination()
  }

  openModal(complaint: Complaint): void {
    this.selectedComplaint = complaint
    this.isModalOpen = true
    document.body.style.overflow = "hidden"
  }

  closeModal(): void {
    this.isModalOpen = false
    this.selectedComplaint = null
    document.body.style.overflow = "auto"
  }

  onModalBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal()
    }
  }

  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen
  }

  selectFilter(filter: string): void {
    this.selectedFilter = filter
    this.isFilterOpen = false
    this.currentPage = 1
    this.updatePagination()
  }

  closeFilter(): void {
    this.isFilterOpen = false
  }

  // retorna todos resultados que foram filtrados (sem paginação)
  getAllFilteredComplaints(): Complaint[] {
    let filtered = this.complaints

    // filtro por status
    if (this.selectedFilter !== "todos") {
      filtered = filtered.filter((complaint) => complaint.status === this.selectedFilter)
    }

    // filtro por termo de busca
    if (this.searchTerm.trim()) {
      filtered = filtered.filter(
        (complaint) =>
          complaint.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          complaint.location.toLowerCase().includes(this.searchTerm.toLowerCase()),
      )
    }

    return filtered
  }

  // obter intens da pagina atual
  getFilteredComplaints(): Complaint[] {
    const allFiltered = this.getAllFilteredComplaints()
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    return allFiltered.slice(startIndex, endIndex)
  }

  // unificação para atualizar a paginação
  updatePagination(): void {
    const totalItems = this.getAllFilteredComplaints().length
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage)

    // se a página atual for maior que o total, voltar para a primeira
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = 1
    }

    // se não tem itens garante que está na página 1
    if (totalItems === 0) {
      this.currentPage = 1
      this.totalPages = 0
    }

    console.log("Paginação atualizada:", {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      totalItems: totalItems,
      itemsPerPage: this.itemsPerPage,
    })
  }

  // navegação da paginação
  goToPage(page: number): void {
    console.log("Tentando ir para página:", page)
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page
      console.log("Página alterada para:", this.currentPage)
    }
  }

  goToPreviousPage(): void {
    console.log("Tentando ir para página anterior. Atual:", this.currentPage)
    if (this.currentPage > 1) {
      this.currentPage--
      console.log("Nova página:", this.currentPage)
    }
  }

  goToNextPage(): void {
    console.log("Tentando ir para próxima página. Atual:", this.currentPage, "Total:", this.totalPages)
    if (this.currentPage < this.totalPages) {
      this.currentPage++
      console.log("Nova página:", this.currentPage)
    }
  }

  // gera array de números das páginas para exibir
  getPageNumbers(): number[] {
    const pages: number[] = []

    if (this.totalPages <= 5) {
      // se tem 5 ou menos páginas mostra todas 
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i)
      }
    } else {
      // mostra páginas ao redor da atual
      let startPage = Math.max(1, this.currentPage - 2)
      let endPage = Math.min(this.totalPages, this.currentPage + 2)

      // sempre mostrar 5 páginas quando possível
      if (endPage - startPage < 4) {
        if (startPage === 1) {
          endPage = Math.min(this.totalPages, startPage + 4)
        } else {
          startPage = Math.max(1, endPage - 4)
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
    }

    console.log("Páginas a exibir:", pages)
    return pages
  }

  // função chamada quando mudar a busca
  onSearchChange(): void {
    this.currentPage = 1
    this.updatePagination()
  }

  getFilterLabel(): string {
    switch (this.selectedFilter) {
      case "pendente":
        return "Pendente"
      case "resolvido":
        return "Resolvido"
      case "analise":
        return "Em Análise"
      case "nao-resolvido":
        return "Não Resolvido"
      default:
        return "Todos"
    }
  }

  // informações pra exibir na paginação
  getPaginationInfo(): string {
    const allFiltered = this.getAllFilteredComplaints()
    if (allFiltered.length === 0) return "0 denúncias"

    const startItem = (this.currentPage - 1) * this.itemsPerPage + 1
    const endItem = Math.min(this.currentPage * this.itemsPerPage, allFiltered.length)
    return `${startItem}-${endItem} de ${allFiltered.length} denúncias`
  }
}
